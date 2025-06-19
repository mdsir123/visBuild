import Img from "./Img";
import Card from "./Card";

export const MediaElements = [
  {
    id: "img",
    label: "Image",
    type: "media",
    component: Img,
    defaultProps: {
      src: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      alt: "shoes",
      className: "w-fit fill ",
    },
    preview: (
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        alt="Shoes"
      />
    ),
    isContainer: false,
    children: []
  },
  {
    id: "card",
    label: "Media Card",
    type: "media",
    component: Card,
    defaultProps: {
      title: "Card Title",
      description:
        "A card component has a figure, a body part, and inside body there are title and actions parts",
      imgUrl:
        "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      alt: "shoes",
      btn: "Buy Now",
    },
    preview: (
      <div className="card bg-base-100 w-[100%] shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          {/* <input type="text" value="Card Title" className="text-lg font-semibold"/> */}
          {/* <textarea name="description" className="border-none resize-none h-16" value="A card component has a figure, a body part, and inside body there are title and actions parts"></textarea> */}
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            {/* <input type="submit" className="btn btn-primary" value="Buy Now"/> */}
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    ),
    isContainer: false,
    children: []
  },
];
