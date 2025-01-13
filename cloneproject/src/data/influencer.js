export const categories = [
    {
      id: 1,
      name: "Ethnic",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fjyUskOJeeVUBTcksbjSvoqcRpcQRdOKdg&s",
    },
    {
      id: 2,
      name: "Party",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fjyUskOJeeVUBTcksbjSvoqcRpcQRdOKdg&s",
    },
    {
      id: 3,
      name: "Casual",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCtTp9I4tzHf5c6-Nsl9VCVtCo9WBchJR3Yg&s",
    },
    {
      id: 4,
      name: "Athleisure",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQJiu_xv1md7dAAKNRqqX5jIZLP_gBkTOkw&s",
    },
  ];
  
  export const influencers = [
    {
      id: 1,
      name: "Raveena Tekwani",
      profileImage: "https://via.placeholder.com/150",
      categories: [
        {
          categoryId: 1, // Ethnic
          video: "https://www.youtube.com/watch?v=example_video_1",
          product_category: [
            { productId: 101, name: "Embroidered Saree" },
            { productId: 102, name: "Traditional Jewelry Set" },
          ],
        },
        {
          categoryId: 3, // Casual
          video: "https://www.youtube.com/watch?v=example_video_2",
          product_category: [
            { productId: 103, name: "Casual Denim Jacket" },
            { productId: 104, name: "Stylish Sneakers" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Siddhi Doshi",
      profileImage: "https://via.placeholder.com/150",
      categories: [
        {
          categoryId: 2, // Party
          video: "https://www.youtube.com/watch?v=example_video_3",
          product_category: [
            { productId: 201, name: "Cocktail Dress" },
            { productId: 202, name: "High Heels" },
          ],
        },
        {
          categoryId: 4, // Athleisure
          video: "https://www.youtube.com/watch?v=example_video_4",
          product_category: [
            { productId: 203, name: "Yoga Pants" },
            { productId: 204, name: "Sports Bra" },
          ],
        },
      ],
    },
  ];
  