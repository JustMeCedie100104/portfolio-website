# Dev Log Guide

The dev log is a "building in public" feature for sharing progress updates.

## Public Page

Route: `/devlog`

Components live in `client/src/components/devlog/`. Data flows through the `features/devlog/` module.

## Admin Management

Route: `/admin/devlog` (requires authentication)

Use the admin panel to create, edit, and publish entries.

## API

- `GET /api/devlog` — returns published entries only
- `POST /api/devlog` — create (admin)
- `PUT /api/devlog/:id` — update (admin)
- `DELETE /api/devlog/:id` — delete (admin)

## Entry Fields

| Field     | Type       | Required |
|-----------|------------|----------|
| title     | string     | Yes      |
| summary   | string     | Yes      |
| content   | string     | Yes      |
| tags      | string[]   | No       |
| published | boolean    | No       |
