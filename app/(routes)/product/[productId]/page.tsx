import ProductList from "@/components/product-list";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import getCategories from "@/actions/get-categories";

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  const displayedSuggestedProducts = suggestedProducts.slice(0, 4);
  ///frequently bought together

  const categories = await getCategories();
  const categoriesArray = ["shirts", "caps", "gloves", "shoes"];

  const randomIndex = Math.floor(Math.random() * categoriesArray.length);
  const targetCategoryName = categoriesArray[randomIndex];
  const targetCategory = categories.find(
    (category) =>
      category.name.toLowerCase() === targetCategoryName.toLowerCase()
  );
  const targetCategoryId = targetCategory ? targetCategory.id : undefined;
  const boughtProducts = await getProducts({
    categoryId: targetCategoryId,
  });
  const displayBoughtProducts = boughtProducts.slice(0, 3);

  //end

  if (!product) {
    return null;
  }

  return (
    <>
      <div className="bg-white">
        <Container>
          <div className="px-4 py-10 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <Gallery images={product.images} />
              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                <Info data={product} />
              </div>
            </div>
            <hr className="my-10" />
            <ProductList
              title="You may also like"
              items={displayedSuggestedProducts}
            />
            <hr className="my-10" />
            <ProductList
              title="Frequently Bought Together"
              items={displayBoughtProducts}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductPage;
