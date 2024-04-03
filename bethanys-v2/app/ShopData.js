const Products = [
    {
        productId: 'CP-01',
        productName: 'Classic Apple Pie',
        productImage: require('../assets/shutterstock_583548499.jpg'),
        productDescription: `The classic Apple Pie. Not much different than the pies you Grandmother used to make. Hearty locally sourced Apples. Add in the special pinch of Bethanys magic. The ultimate treat, can't miss with a large scoop of Vanilla Ice Cream`,
        productPrice: 18.99,
    },
    {
        productId: 'CP-02',
        productName: 'Classic Pumpkin Pie',
        productImage: require('../assets/shutterstock_710266606.jpg'),
        productDescription: `A rustic Pumpkin pie. A hearty snack for the chilly winter night. Topped will locally sourced nuts, optional of you are allergic or don't like them. Be sure to order early because we always sell out`,
        productPrice: 22.99,
    },
    {
        productId: 'CP-03',
        productName: 'Classic Walnut Pie',
        productImage: require('../assets/shutterstock_1528835303.jpg'),
        productDescription: `We use locally sources walnuts to make a unique twist on an American favorite. If you hav enever tasted Walnut Pie you are in for a treat`,
        productPrice: 25.85,
    },
    {
        productId: 'CP-04',
        productName: 'Classic Berry Pie',
        productImage: require('../assets/food-2608699_1280.jpg'),
        productDescription: `The classic Berry Pie. Fresh locally sourced Blue Berries and Black Berries are the star of the show. The demand if high for these tasty fruit pies with a sweet custard base. SOmething different from Bethanys, this pie is sure to bring a lot of questions, mainly where can they buy one`,
        productPrice: 28.99,
    },
    {
        productId: 'CP-05',
        productName: 'Classic Fruit Pies',
        productImage: require('../assets/pexels-solodsha-8104732.jpg'),
        productDescription: `The seasonal fruit pies are back. Strawberry, Peach, and Blueberry are on deck. Supplies are limited for these locally sourced, unique fruit pies. Once our supply of fruits runs out these pies will be gone until next year. Make sure you call early, we sell out every day. Place your order now`,
        productPrice: 31.55,
    },
    {
        productId: 'CC-01',
        productName: 'Caramel Cheese Cake',
        productImage: require('../assets/shutterstock_574339267.jpg'),
        productDescription: `Succulent Caramel Cheese Cake. The Caramel Glaze blends with tasty cheese cake. One taste and you know that you have found something unique. Make sure you place your order now`,
        productPrice: 29.99,
    },
    {
        productId: 'CC-02',
        productName: 'Chocolate Cheese Cake',
        productImage: require('../assets/shutterstock_777097618.jpg'),
        productDescription: `Cheese Cake infused with delicious milk chocolate. All natural ingredients. This Cheese Cake is one of the delicious secrets Bethanys is ready to share with you. Discounted for a limited time.`,
        productPrice: 22.99,
    },
    {
        productId: 'CC-03',
        productName: 'Classic Cheese Cake',
        productImage: require('../assets/shutterstock_1049547437.jpg'),
        productDescription: `The classic Cheese Cake. When Bethanys firsts started we knew that we would need to evolve past just pies. When we asked what was next this is what we answered with, the Classic Cheese Cake. This is still the answer for a lot of people. Try it, you won't be disappointed`,
        productPrice: 19.99,
    },
    {
        productId: 'CC-04',
        productName: 'Pistachio Cheese Cake',
        productImage: require('../assets/shutterstock_1512270398.jpg'),
        productDescription: `If you love Pistachios, this is the Cheese Cake for you. Pack with the unique taste only a Pistachio can impart, this Cheese Cake is better than your favorite Ice Cream. One taste and I guarantee you will want more.`,
        productPrice: 24.99,
    },
    {
        productId: 'CC-05',
        productName: 'Strawberry Cheese Cake',
        productImage: require('../assets/shutterstock_1764175436.jpg'),
        productDescription: `Strawberry Cheese Cake topped with fresh locally sourced Strawberries. The onlyproblem is that it doesnt last as long as our normal Cheese Cake. It doesnt matter beacause there is never a chance for this to spoil. It will be eaten long before that happens`,
        productPrice: 28.99,
    },
    {
        productId: 'CC-06',
        productName: 'Signature Cheese Cake',
        productImage: require('../assets/shutterstock_2150705021.jpg'),
        productDescription: `This is the signature Cheese Cake from Bethanys Pie Shop. After serving the classic Cheese Cake for yers we decided to try something new. We set out to re create our Cheese Cake from scratch. This nw recipe soon became something different. If the Classic Cheese Cake is comfort food, the signature Cheese Cake is the food you need for gatherings and special events. Don't take our word for it, schedule a tasting today`,
        productPrice: 31.85,
    },
];

export const grabAllProducts = () => {
    return Products;
};

export const grabOneProduct = (id) => {
    return Products.find((product) => product.productId == id);
};
