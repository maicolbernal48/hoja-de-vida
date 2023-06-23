import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  public text: string| undefined;
  private activatedRoute = inject(ActivatedRoute);
  
  constructor(private router: Router) { }


  
  
    ngOnInit() {
    this.text=''; 
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
}
}