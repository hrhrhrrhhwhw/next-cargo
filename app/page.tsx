import Hero from "@/components/web/hero";
import Description from "@/components/web/description";
import Footer from "@/components/web/footer";
import Freight from "@/components/web/freight";
import Lading from "@/components/web/lading";

export default function Page() {
    return (
        <div>
            <Hero />
            <Freight />
            <Lading />
            <Description />
        </div>
    );
}
