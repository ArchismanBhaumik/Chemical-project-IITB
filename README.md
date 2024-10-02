App Features
Add Chemical: Users can add new chemical entries with relevant data, including name, vendor, density, viscosity, packaging, etc.
Remove Chemical: Users can remove selected chemicals from the inventory using checkboxes.
Edit Chemical: Each row has an "Edit" button, allowing the user to modify the data of the respective chemical.
Sort Chemicals: Users can sort the inventory by chemical name in ascending or descending order.
Responsive Design: The app is mobile-friendly, ensuring a good experience across devices.
Design Approach
Key Design Considerations:
Modularity and Scalability:
The design of the app emphasizes modularity, with separate functions for rendering, sorting, and interacting with the data (add/edit/remove). This ensures that the app can be easily scaled and maintained in the future.
DOM Manipulation Efficiency:
The app minimizes DOM manipulation by clearing and re-rendering the table only when necessary (e.g., when sorting, adding, or removing rows).
Separation of Concerns:
Business logic (e.g., sorting, adding) is separate from UI rendering. This is achieved through the renderTable() function, which handles UI updates.
Bootstrap Integration:
The app uses Bootstrap for easy styling and consistent UI components like modals and buttons. This provides a clean, responsive layout without the need for custom CSS.
Design Choices:
Data-Driven Approach:
The table is dynamically generated from a JSON array. The app does not hard-code rows in the HTML but instead maps the data into DOM elements. This approach makes it easier to manage data changes and maintain code.
Bootstrap for Styling:
Using Bootstrap ensures a modern and consistent UI with minimal CSS. It also provides built-in responsiveness and compatibility across different screen sizes.
JavaScript-Only Application:
To keep the app lightweight and easy to understand, no external frameworks were used. The app is built entirely with vanilla JavaScript to handle user interactions, which reduces complexity.
