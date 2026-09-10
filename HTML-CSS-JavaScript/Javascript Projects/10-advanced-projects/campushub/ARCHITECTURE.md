# CampusHub Architecture

## Frontend

React handles:
- UI
- routing
- local UI state
- API communication

## Backend

Express handles:
- routes
- validation
- authentication middleware
- controllers

## Services

Business logic belongs in services rather than route handlers.

## Database

MongoDB stores:
- users
- products
- categories
- orders
- messages

## Example request

```text
POST /api/products
       ↓
Route
       ↓
Authentication middleware
       ↓
Validation
       ↓
Controller
       ↓
Product service
       ↓
MongoDB
       ↓
JSON response
```
