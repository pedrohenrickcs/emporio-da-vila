import CategoriesSlider from "@/components/CategoriesSlider";
import Categories from "@/components/CategoriesSlider";
import FeaturedProducts from "@/components/FeaturedProductsSlider";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <main className="bg-primary">
            <Header />
            <Hero />
            <Categories />
            <FeaturedProducts />
            <CategoriesSlider />
        </main>
    );
}
