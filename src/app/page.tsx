import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
    return (
        <main className="bg-primary">
            <Header />
            <Hero />
            <Categories />
            <FeaturedProducts />
        </main>
    );
}
