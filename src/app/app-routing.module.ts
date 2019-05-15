import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './home/pages/blog/blog.component';
import { PageNotFoundComponent } from './home/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'blog', component: BlogComponent},
  {path: '', redirectTo: 'blog', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
