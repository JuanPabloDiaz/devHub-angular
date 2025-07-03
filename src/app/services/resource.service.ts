import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError } from 'rxjs';
import { ResourcesResponse, Resource } from '../models/resource.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  // Usamos una URL relativa para que pase por el proxy configurado en proxy.conf.json
  private apiUrl = '/api/resources/';
  private useSampleData = false; // Esta variable controla si se usan datos de ejemplo o no

  constructor(private http: HttpClient) { }

  getResources(): Observable<ResourcesResponse> {
    // Si el usuario ha elegido explícitamente usar datos de ejemplo
    if (this.useSampleData) {
      console.log('Using sample data by user choice');
      return of(this.getSampleData());
    }
    
    // Sin headers para evitar problemas de CORS
    return this.http.get<ResourcesResponse>(this.apiUrl).pipe(
      catchError(error => {
        console.error('API Error:', error);
        console.log('Usando datos de ejemplo debido a un error de conexión con la API');
        return of(this.getSampleData());
      })
    );
  }
  
  // Método para cambiar entre datos reales y datos de ejemplo
  toggleSampleData(useSample: boolean): void {
    this.useSampleData = useSample;
    console.log(useSample ? 'Switched to sample data' : 'Using real API data');
  }

  // Datos de ejemplo para usar cuando la API no está disponible
  private getSampleData(): ResourcesResponse {
    return {
      resources: [
        {
          id: '1',
          name: 'GitHub',
          slug: 'github',
          description: 'GitHub is a web-based hosting service for version control using Git.',
          url: 'https://github.com',
          categories: ['Version Control', 'Collaboration'],
          keywords: ['git', 'repository', 'version control', 'code hosting']
        },
        {
          id: '2',
          name: 'Stack Overflow',
          slug: 'stack-overflow',
          description: 'Stack Overflow is a question and answer site for professional and enthusiast programmers.',
          url: 'https://stackoverflow.com',
          categories: ['Community', 'Q&A'],
          keywords: ['questions', 'answers', 'programming', 'community']
        },
        {
          id: '3',
          name: 'MDN Web Docs',
          slug: 'mdn-web-docs',
          description: 'Resources for developers, by developers to learn web technologies including HTML, CSS, JavaScript.',
          url: 'https://developer.mozilla.org',
          categories: ['Documentation', 'Learning'],
          keywords: ['documentation', 'web', 'html', 'css', 'javascript']
        },
        {
          id: '4',
          name: 'Angular Documentation',
          slug: 'angular-documentation',
          description: 'Official Angular documentation, tutorials, guides, and API reference.',
          url: 'https://angular.io/docs',
          categories: ['Documentation', 'Framework'],
          keywords: ['angular', 'framework', 'typescript', 'spa']
        },
        {
          id: '5',
          name: 'VS Code',
          slug: 'vs-code',
          description: 'Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.',
          url: 'https://code.visualstudio.com',
          categories: ['Editor', 'Tool'],
          keywords: ['editor', 'ide', 'development', 'microsoft']
        },
        {
          id: '6',
          name: 'npm',
          slug: 'npm',
          description: 'npm is the package manager for JavaScript and the worlds largest software registry.',
          url: 'https://www.npmjs.com',
          categories: ['Package Manager', 'Tool'],
          keywords: ['javascript', 'package', 'node', 'dependency']
        }
      ]
    };
  }
}
