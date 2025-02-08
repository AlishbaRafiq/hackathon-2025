export interface Product{
    id:string;
    name:string;
    _type:"product";
    price:number;
    description?:string;
    stockLevel:number;
    discountPercentage:number;
    imagePath:string;
    isFeaturedProduct:number;
    image?:{
        asset:{
            _ref:string;
            _type:"image";
        };
    }
}