# BloodCamp Donation Platform

BloodCamp is a web platform aimed at connecting blood donors with recipients in need of blood donations. This platform facilitates the process of finding blood donors, making donation requests, and managing donation requests.

## Key Features BloodCamp

1. **Donation Requests:** Users can create, update, and delete donation requests, specifying details such as recipient name, blood group, hospital name, address, and donation date.

2. **Donor Dashboard:** Donors have access to a dashboard where they can view donation requests, filter them based on various criteria, and respond to requests they wish to fulfill.

3. **Payment:** BloodUnity allows users to make payments for donations, ensuring a seamless and secure transaction process.

4. **Profile Management:** Users can update their profiles, providing essential information such as contact details, blood group, and donation history.

## Project Setup

To set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Chumki111/Blood-Donation.git
    ```

2. Navigate to the project directory:
    ```bash
    cd blood-unity
    ```

3. Install dependencies using npm or yarn:
    ```bash
    npm install
    # or
    yarn install
    ```

4. Create a `.env` file in the root directory and add necessary environment variables such as API keys, database URLs, etc.

5. Start the development server:
    ```bash
    npm run dev
    ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## React Router

This project utilizes React Router for client-side routing. React Router is a powerful routing library for React applications, allowing navigation between different components without the need for page refreshes.
For more information on React Router, refer to the [official documentation](https://reactrouter.com/en/main/start/tutorial).

### Installation

To install React Router in your project, run:

```bash
npm install react-router-dom
# or
yarn add react-router-dom
