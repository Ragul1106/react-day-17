import React from 'react';

const IntroDynamicRouting = () => {
  return (
    <div className="container p-4 bg-white rounded shadow-sm mx-auto my-4"> {/* Bootstrap container, padding, background, rounded corners, shadow, centered */}
      <h2 className="text-center mb-3 h2 text-dark">Introduction to Dynamic Routing</h2> {/* Text alignment, margin-bottom, font size, text color */}
      <p className="text-body mb-3"> {/* Text color, margin-bottom */}
        Dynamic routing in React (typically with `react-router-dom`) allows you to create routes where a part of the URL is variable, representing a parameter. This parameter can then be extracted and used by the component rendered at that route.
      </p>
      <h3 className="h3 text-dark mb-2">How it Works:</h3> {/* Font size, text color, margin-bottom */}
      <p className="text-body mb-3">
        Instead of defining a separate route for every single resource (e.g., `/user/1`, `/user/2`, `/user/3`), you define a single dynamic route like `/user/:id`. The `:id` part is a placeholder that matches any value in that position of the URL.
      </p>
      <h3 className="h3 text-dark mb-2">Use Cases:</h3>
      <ul className="list-group list-group-flush"> {/* Replaced generic ul with Bootstrap list group for better styling control, though simple ul works */}
        <li className="list-group-item border-0 px-0 pt-0 pb-2"> {/* Remove border, padding, add small bottom margin */}
          <strong>User Profiles:</strong> Displaying individual user profiles based on a user ID (e.g., `/profile/john-doe`).
        </li>
        <li className="list-group-item border-0 px-0 py-2">
          <strong>Product Details:</strong> Showing details of a specific product using its ID or slug (e.g., `/products/awesome-widget`).
        </li>
        <li className="list-group-item border-0 px-0 py-2">
          <strong>Blog Posts:</strong> Rendering a specific blog post based on its unique identifier (e.g., `/blog/my-first-post`).
        </li>
        <li className="list-group-item border-0 px-0 py-2">
          <strong>Category/Subcategory Pages:</strong> Navigating through different categories and subcategories (e.g., `/category/electronics/laptops`).
        </li>
        <li className="list-group-item border-0 px-0 pb-0 pt-2">
          <strong>Search Results:</strong> Displaying results for a specific search query (though often done with query parameters, dynamic segments are also possible for simpler cases).
        </li>
      </ul>
      <p className="text-body mt-4">
        This approach makes your application more scalable and maintainable, as you don't need to create a new route definition for every single piece of content.
      </p>
    </div>
  );
};

export default IntroDynamicRouting;