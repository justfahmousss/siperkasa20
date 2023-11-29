import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import  Container  from "./Container";
import Landing from "@/components/Landing"
import { products } from "@/utils/products";
import { truncateText } from "@/utils/truncateText";
import CardBuku from "@/components/products/CardBuku";


export default function Home() {
	return (
		<div className="light p-8">
      <Container>
        <div className="light">
          <Landing/>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {products.map((product: any) =>{
            return <CardBuku data={product}/>;
          })}
        </div>
      </Container>
    </div>
	);
}
