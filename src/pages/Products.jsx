import { Link } from "react-router-dom";
export default function Products() {
  
  return (
    <div>
      <h1>In Products Page</h1>
      <ul>
        <li><Link to='/products/p1'>A Book</Link></li>
        <li><Link to='/products/p2'>A Car</Link></li>
        <li><Link to='/products/p3'>An Online Store</Link></li>
      </ul>
    </div>
  );
}
