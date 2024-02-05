# Redux Study

## Deployment:
https://redux-study-zeta.vercel.app

## Overview

This project demonstrates the implementation of Redux in a Next.js application for global state management. The primary focus is on creating a structure that allows shared states across components, showcasing how Redux can be used to manage state in a scalable and efficient way.

### Key Features

- **Global State Management:**Utilize Redux for centralized state management across the application.
- **Modular Structure**: Organized directory structure with GlobalRedux containing all Redux-related logic.
- **Reusable State Logic**: Implement feature-based slices for different aspects of the application, such as authentication and settings.
- **Interactive UI Components**: Use Chakra UI for a polished and responsive user interface.

## Project Structure

- `app/`
  - `GlobalRedux/`: Main directory for Redux logic.
    - `features/`: Contains subdirectories for each feature's state management.
      - `counter/`: Example feature with `counterSlice.tsx` for managing counter state.
      - Other features can be similarly structured.
    - `provider.tsx`: Sets up the Redux provider for the application.
    - `store.ts`: Configures the Redux store with reducers.
  - `layout.tsx`: Root layout that wraps the application with the Redux provider.
  - `page.tsx`: Example page demonstrating the use of Redux state.

## To get started with this project:

1. Clone the repository.
1. Install dependencies using npm install.
1. Run the development server with npm run dev.

### Prerequisites

- Node.js

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jacklion710/redux-study
   cd redux-study
   npm install
   npm run dev
   ```

2. **Install Dependencies**
Run the following command to install the necessary dependencies:

    ```bash
    npm install
    ```
3. **Run the Development Server**
Start the development server with:

    ```bash
    npm run dev
    ```

## Working with Redux

### Adding a New Feature

1. Create a new subdirectory in `app/GlobalRedux/features/`.
2. Define a slice file (e.g., `featureSlice.tsx`) using Redux Toolkit's `createSlice`.
3. Add the slice's reducer to the `store.ts`.

### Using Redux State in Components

1. Import `useSelector` and `useDispatch` from `react-redux`.
2. Use `useSelector` to select state from the store.
3. Use `useDispatch` to dispatch actions to update the state.

### Example: Counter Feature

The counter feature demonstrates a basic implementation of Redux:

- **State**: A simple numerical value.
- **Actions**: Increment, decrement, and reset.
- **Reducer**: Handles actions and updates the state.

### Best Practices

- **Modular Structure**: Keep feature logic encapsulated in respective directories.
- **Scalability**: Design your state structure and actions with scalability in mind.
- **Performance**: Use selectors efficiently to derive data from the Redux store.

### Built With
React - A JavaScript library for building user interfaces
Redux -  A react library for sharing global states across a projects components
Chakra UI - A simple, modular, and accessible component library that gives you the building blocks you need to build your React applications.

Feel free to contribute to this project by submitting pull requests or opening issues for any bugs or enhancements.