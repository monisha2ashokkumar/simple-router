import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function ProductItem() {
  const param = useParams();
  console.log(param.productId);
  return (
    <section>
      <h3>In Product Details section</h3>
      <h3>the option you selected is</h3>
      <p>{param.productId}</p>
    </section>
  );
}
