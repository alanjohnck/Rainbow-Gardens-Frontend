import React, { useEffect } from "react";
import "./Product.css";
import NavbarWithBorder from "../Navbar/NavbarWithBorder";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProductByPno } from "../Redux/Slice/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import productLine from "../images/ProductFooterLine.svg";
import whatsappIcon from "../images/WhatsappSmallIcon.svg";
import Footer from "../Footer/Footer";
import { ThreeDots } from "react-loader-spinner";
import { addProduct } from "../Redux/Slice/ProductSlice";

export default function Product() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const   productState = useSelector((state) => state.product);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProductByPno(productId));
  }, []);

  const handleAddCartClick = () => {
    const product = {
      productPno: productState.product?.Pno,
      productName: productState.product?.plantName,
      productCategory: productState.product?.category,
      productPrice: productState.product?.plantPrice,
      productImage: productState.product?.images?.[0],
      quantity: 1,
    };
    dispatch(addProduct({ product }));
    navigate("/cart");
  };

  return (
    <div className="product">
      {productState.isLoading ? (
        <div className="loaderDiv">
          <ThreeDots visible={true} color="#063C17" />
        </div>
      ) : (
        <div className="productContainer">
          <NavbarWithBorder />
          <div className="productBottomContainer">
            <div className="productBottomLeftDiv">
              <div className="productImageContainer">
                <img src={productState.product?.images?.[0]} alt="productImg" />
              </div>
            </div>

            <div className="productBottomRightDiv">
              <div className="productRightTopDiv">
                <div className="productTitle">
                  <span>{productState.product?.plantName}</span>
                </div>

                <div className="productSmallDescriptionDiv">
                  <span>{productState.product?.plantSmallDescription}</span>
                </div>

                <div className="price-add-to-cart-combo">
                  <div className="productPriceDiv">
                    <span>₹ {productState.product?.plantPrice}</span>
                  </div>

                  <div className="addCartButton">
                    <button
                      className="cartButton"
                      onClick={() => handleAddCartClick(productState.product)}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="productRightBottomDiv">
                <div className="productCategoryDiv">
                  <span>Category:</span>
                  <button className="categoryButton">
                    {productState.product?.category}
                  </button>
                </div>

                <div className="productFooterLine">
                  <img src={productLine} alt="productLine" />
                </div>

                <div className="productLongDescriptionDiv">
                  <span>{productState.product?.plantLongDescription}</span>
                </div>

                <div className="whatsappContactButton">
                  <button className="whatsappButton">
                    <img src={whatsappIcon} alt="whatsappIcon" />
                    <span>+91 8999999999</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}
