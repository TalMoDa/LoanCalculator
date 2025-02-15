# LoanCalculator Frontend

## Overview
The `LoanCalculator` frontend is a Single Page Application (SPA) developed using Angular. It provides an interactive user interface for calculating loan interests based on client details, integrating seamlessly with the backend `LoanCalculatorAPI`. The application allows users to input loan parameters and receive dynamically calculated loan details.

---

## Features
- User-friendly form for entering loan details:
  - **User ID**
  - **Loan Amount**
  - **Loan Period (in months)**
- Validates user inputs to ensure correct data entry.
- Sends requests to the backend `LoanCalculatorAPI` and displays the calculated loan details.
- Provides dynamic feedback with clear error messages if validation fails or the backend returns errors.
- Uses modular and reusable Angular components and services for maintainability.
- Styled with responsive and modern CSS for a clean user experience.


## Setup Instructions

### Prerequisites
- A running instance of the `LoanCalculatorAPI` backend

### Steps to Run the Application
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd loan-calculator-frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure the Backend URL**:
  - Update the backend API URL in the `environment.ts` file:
    ```typescript
    export const environment = {
      production: false,
      apiUrl: 'https://localhost:5001' // URL of the LoanCalculatorAPI
    };
    ```

4. **Run the Application**:
   ```bash
   ng serve
   ```
  - The application will be accessible at `http://localhost:4200`.

---

## File Structure

### Key Folders and Files
- **src/app**:
  - Contains all application logic.
  - Includes components, services, and modules.
- **LoanFormComponent**:
  - Path: `src/app/compenents/loan-valuation-form`
  - Handles the user interface and interactions for loan calculations.
- **FinanceService**:
  - Path: `src/api/loanCalculatorApi/api/finance.service.ts`
  - Manages API calls to the `LoanCalculatorAPI`.
- **Styles**:
  - Path: `src/styles.css`
  - Contains global styles for the application.
- **Environment Configuration**:
  - Path: `src/environments/environment.ts`
  - Stores environment-specific settings such as API URLs.

---

## User Guide
1. Open the application in a web browser (`http://localhost:4200`).
2. Enter the following details:
  - **User**: The client from the hard coded list the value will be unique identifier for the client.
  - **Loan Amount**: The requested loan amount in NIS.
  - **Loan Period**: The loan period in months.
3. Click the "Submit" button.
4. View the loan calculation results in the dynamically updated results section.
5. If there are errors in the input or from the backend, appropriate error messages will be displayed.

---

## Troubleshooting
- **Backend Not Available**:
  - Ensure the `LoanCalculatorAPI` is running and accessible.
  - Verify the `apiUrl` in `environment.ts` matches the backend URL.

- **Form Validation Errors**:
  - Ensure all fields are filled with valid data.
  - Check for validation messages under each input field.

  
---

## Future Enhancements
- Add more loan scenarios and dynamic rule validation.
- Implement authentication for secure API access.
- Enhance UI with more detailed loan breakdowns and graphs.

---

## Contact
For support or inquiries, contact the author of this application or submit an issue in the repository.

