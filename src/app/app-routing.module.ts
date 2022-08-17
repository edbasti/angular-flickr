import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
   
import { SearchImagesComponent } from './search-images/search-images.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
    
const routes: Routes = [
  {
      path: '',
      component: SearchImagesComponent
  },
  {
      path: 'detail',
      component: ImageDetailComponent
  }
];
    
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }