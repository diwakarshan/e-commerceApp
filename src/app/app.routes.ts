import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoriesComponent } from './pages/admin/categories/categories.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { CusproductsComponent } from './pages/website/cusproducts/cusproducts.component';
import { NewUserComponent } from './pages/admin/new-user/new-user.component';
import { CustomerCartComponent } from './pages/website/customer-cart/customer-cart.component';
// import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path:'',redirectTo:'shop',pathMatch:'full',},
    {path:'login',component:LoginComponent},
    {path:'',component:LandingComponent,
        children:[
            {path:'shop',component:CusproductsComponent},
            {path:'products/:id',component:CategoryProductsComponent},
            {path:'cart',component:CustomerCartComponent}
        ]
    },
    {
        path:'',component:LayoutComponent,children:[
            {path:'products',component:ProductsComponent },
            {path:'category',component:CategoriesComponent}
        ]
    },
    {path:'products/:id',component:CategoryProductsComponent},
    {path:'newuser',component:NewUserComponent},
    {path:'cart',component:CustomerCartComponent}
];
