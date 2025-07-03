import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResourceService } from '../../services/resource.service';
import { Resource } from '../../models/resource.model';
import { ResourceCardComponent } from '../resource-card/resource-card.component';

@Component({
  selector: 'app-resource-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ResourceCardComponent],
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {
  resources: Resource[] = [];
  filteredResources: Resource[] = [];
  allCategories: string[] = [];
  searchTerm: string = '';
  selectedCategory: string = '';
  isLoading: boolean = true;
  error: string | null = null;

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.loadResources();
  }

  loadResources(): void {
    this.isLoading = true;
    this.resourceService.getResources().subscribe({
      next: (data) => {
        this.resources = data.resources;
        this.filteredResources = [...this.resources];
        this.extractCategories();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching resources:', error);
        this.error = 'Failed to load resources. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  extractCategories(): void {
    const categoriesSet = new Set<string>();
    
    this.resources.forEach(resource => {
      if (resource.categories) {
        resource.categories.forEach(category => {
          categoriesSet.add(category);
        });
      }
    });
    
    this.allCategories = Array.from(categoriesSet).sort();
  }

  applyFilters(): void {
    this.filteredResources = this.resources.filter(resource => {
      // Apply search term filter
      const matchesSearchTerm = !this.searchTerm || 
        resource.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
        resource.description.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      // Apply category filter
      const matchesCategory = !this.selectedCategory || 
        (resource.categories && resource.categories.includes(this.selectedCategory));
      
      return matchesSearchTerm && matchesCategory;
    });
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onCategoryChange(): void {
    this.applyFilters();
  }
}
