# Mini User Dashboard

A small, modern dashboard for viewing a list of users built with Vite, React and TypeScript.

## Overview

This repository contains a compact demo application that displays a list of users. It uses a service layer and a custom hook to fetch and manage user data and is structured to be easy to extend.

## Features

- User list display
- Reusable `UserItem` component for rendering a single user
- `useUsers` hook for loading and managing users
- Simple `userService` abstraction to replace with a real API

## Tech stack

- Vite
- React
- TypeScript
- CSS Modules

## Quick start

Requirements: Node.js

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Open the app in your browser at the address printed by Vite (usually http://localhost:5173).

## Project structure (important files)

- [src/main.tsx](src/main.tsx) — app entry
- [src/app/App.tsx](src/app/App.tsx) — root component
- [src/components/hooks/useUsers.ts](src/components/hooks/useUsers.ts) — data hook for users
- [src/components/services/userService.ts](src/components/services/userService.ts) — service / API layer
- [src/components/UserList/userList.tsx](src/components/UserList/userList.tsx) — users list component
- [src/components/UserItem/userItem.tsx](src/components/UserItem/userItem.tsx) — single user item component

## How to adapt to a real API

Replace the stub or mock logic in `userService` with real HTTP requests (fetch / axios). The `useUsers` hook is designed to be the single place to orchestrate loading and caching logic.

## Suggested improvements

- Add pagination and search in `UserList`.
- Add optimistic updates and retry/caching in `useUsers`.
- Add forms for create/edit user flows.

