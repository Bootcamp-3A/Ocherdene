let products = [
  {
    name: "Prius 30  ",
    price: 24,
    mile: 90000,
    motor: 1.8,
    krop: " Avtomat ",
    place: "Han uul",
    date: [2013, 2025],
    image:
      "https://cdn1.unegui.mn/media/cache1/98/c6/98c6c9d3634a8162d098efbfb3d2090e.webp",
  },
  {
    name: "Nissan pressage  ",
    price: 3,
    mile: 190000,
    motor: 2.4,
    krop: " Avtomat ",
    place: "Han uul",
    date: [2016, 2018],
    image:
      "https://cdn1.unegui.mn/media/cache1/98/c6/98c6c9d3634a8162d098efbfb3d2090e.webp",
  },
  {
    name: "Nissan pressage  ",
    price: 3,
    mile: 190000,
    motor: 2.4,
    krop: " Avtomat ",
    place: "Han uul",
    date: [2016, 2018],
    image:
      "https://cdn1.unegui.mn/media/cache1/98/c6/98c6c9d3634a8162d098efbfb3d2090e.webp",
  },
  {
    name: "Nissan pressage  ",
    price: 3,
    mile: 190000,
    motor: 2.4,
    krop: " Avtomat ",
    place: "Han uul",
    date: [2016, 2018],
    image:
      "https://cdn1.unegui.mn/media/cache1/98/c6/98c6c9d3634a8162d098efbfb3d2090e.webp",
  },
  {
    name: "Nissan pressage  ",
    price: 3,
    mile: 190000,
    motor: 2.4,
    krop: " Avtomat ",
    place: "Han uul",
    date: [2016, 2018],
    image:
      "https://cdn1.unegui.mn/media/cache1/98/c6/98c6c9d3634a8162d098efbfb3d2090e.webp",
  },
  {
    name: "Nissan pressage  ",
    price: 3,
    mile: 190000,
    motor: 2.4,
    krop: " Avtomat ",
    place: "Han uul",
    date: [2016, 2018],
    image:
      "https://cdn1.unegui.mn/media/cache1/98/c6/98c6c9d3634a8162d098efbfb3d2090e.webp",
  },
];
function card(product) {
  const body = document.getElementsByTagName("body")[0];
  const div = document.createElement("div");
  const img2 = document.createElement("img");
  const div2 = document.createElement("div");
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  const div3 = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");

  div2.className = "sondiv";
  div3.className = "soniinsondiv";
  div.className = "fatherdiv";
  h1.className = "title";
  img2.className = "zurag2";
  img2.src = "heart.png";
  img.className = "zurag";
  img.src = product.image;

  h1.innerText = product.price + " say tugrug";

  p1.innerText = product.name + product.date;
  p1.className = "ptag";
  p2.innerText =
    product.mile +
    " km" +
    " . " +
    product.krop +
    product.motor +
    " litr " +
    product.place;
  p2.className = "p2tag";
  body.appendChild(div);
  div.appendChild(div2);
  div.appendChild(div3);
  div3.appendChild(h1);
  div3.appendChild(img2);
  div2.appendChild(img);

  div.appendChild(p1);
  div.appendChild(p2);
}
products.map(card);
