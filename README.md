# Electricity Bill Generator

## Overview
The Electricity Bill Generator is a simple web-based application that calculates electricity bills based on the number of units consumed. It uses a slab-based tariff system and displays a detailed breakdown of the bill along with the final payable amount.

This project is designed to demonstrate basic frontend development and logical implementation using HTML, CSS, and JavaScript.

---

## Features
- Calculates electricity bill using slab-based pricing
- Displays detailed bill breakdown
- Applies 5% surcharge to the total amount
- Validates user input for accuracy
- Simple and clean user interface
- Reset functionality to clear inputs and results

---

## Technologies Used
- HTML
- CSS
- JavaScript


## Project Structure

electricity-bill-generator/
│
├── index.html # Main interface of the application
├── style.css # Styling for the application
├── script.js # Logic for bill calculation
└── README.md # Project documentation


## Tariff Details
The electricity bill is calculated based on the following slab rates:

- 0–50 units: ₹1.5 per unit  
- 51–150 units: ₹2 per unit  
- 151–250 units: ₹3 per unit  
- Above 250 units: ₹4 per unit  

Additionally, a 5% surcharge is applied to the total calculated bill.



## Working
1. The user enters the consumer name and units consumed.
2. When the "Generate Bill" button is clicked, a JavaScript function is triggered.
3. The input values are validated.
4. The bill is calculated using slab-based conditions.
5. A 5% surcharge is added to the calculated amount.
6. The result is displayed on the webpage with a detailed breakdown.
7. The reset button clears all inputs and results.

## Requirements
- A modern web browser (Chrome, Edge, Firefox, etc.)
- Visual Studio Code (optional, for development)


## Conclusion
This project demonstrates how a real-world problem like electricity billing can be solved using basic web technologies. It helps in understanding conditional logic, input validation, and dynamic content rendering in web applications.

---
