# API Documentation

**Base URL (local):** `http://localhost:3001/api`
**Base URL (production):** `https://api.[your-domain].dev/api`

All request bodies are `application/json`.
Protected routes require `Authorization: Bearer <token>`.

---

## Authentication

### POST /api/auth/login

Login with admin credentials. Returns a signed JWT.

**Body:**
```json
{
  "email": "admin@portfolio.dev",
  "password": "YourPassword"
}
```

**Response 200:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "cluser...",
    "email": "admin@portfolio.dev",
    "role": "ADMIN"
  }
}
```

**Rate limit:** 10 requests / 15 min

---

### POST /api/auth/logout  🔒

Acknowledges client-side token discard (stateless).

**Response 200:**
```json
{ "message": "Logged out successfully" }
```

---

### GET /api/auth/profile  🔒

Returns the authenticated user's profile.

**Response 200:**
```json
{
  "id": "cluser...",
  "email": "admin@portfolio.dev",
  "role": "ADMIN"
}
```

---

## Projects

### GET /api/projects

Returns all published projects, ordered by `sortOrder` then `createdAt`.

**Response 200:** Array of Project objects

---

### GET /api/projects/featured

Returns published + featured projects only.

**Response 200:** Array of Project objects

---

### GET /api/projects/:slug

Returns a single published project by slug.

**Response 200:** Project object
**Response 404:** `{ "error": "Project not found" }`

---

### GET /api/projects/admin/all  🔒

Returns all projects including unpublished.

---

### POST /api/projects  🔒

Create a new project.

**Body:**
```json
{
  "title": "My Project",
  "slug": "my-project",
  "description": "A full description of at least 20 characters.",
  "techStack": ["React", "TypeScript"],
  "featured": false,
  "published": false,
  "githubUrl": "https://github.com/...",
  "liveUrl": "https://...",
  "imageUrl": "https://...",
  "sortOrder": 1
}
```

**Response 201:** Created Project object

---

### PUT /api/projects/:id  🔒

Update a project. All fields are optional (partial update).

**Response 200:** Updated Project object

---

### DELETE /api/projects/:id  🔒

**Response 204:** No content

---

## Contact

### POST /api/contact

Submit a contact message.

**Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "subject": "Project inquiry",
  "message": "I'd like to discuss a potential project..."
}
```

**Response 201:** `{ "id": "clmessage..." }`
**Rate limit:** 5 requests / hour

---

### GET /api/contact  🔒

Returns all messages, newest first.

---

### GET /api/contact/:id  🔒

Returns a single message by ID.

**Response 404:** `{ "error": "Message not found" }`

---

### PATCH /api/contact/:id/read  🔒

Marks a message as read.

**Response 200:** Updated ContactMessage object

---

### DELETE /api/contact/:id  🔒

**Response 204:** No content

---

## Dev Log

### GET /api/devlogs

Returns all published dev log entries, newest first.

**Response 200:** Array of DevLogEntry objects

---

### GET /api/devlogs/:slug

Returns a single published entry by slug.

**Response 404:** `{ "error": "Dev log entry not found" }`

---

### GET /api/devlogs/admin/all  🔒

Returns all entries including unpublished.

---

### POST /api/devlogs  🔒

Create a new dev log entry.

**Body:**
```json
{
  "title": "Entry title",
  "slug": "entry-title",
  "summary": "A short teaser (10–500 chars)",
  "content": "Full markdown content...",
  "tags": ["tag1", "tag2"],
  "published": false
}
```

**Response 201:** Created DevLogEntry object

---

### PUT /api/devlogs/:id  🔒

Update a dev log entry. All fields optional.

**Response 200:** Updated DevLogEntry object

---

### DELETE /api/devlogs/:id  🔒

**Response 204:** No content

---

## Resume

### GET /api/resume/active

Returns the currently active resume file.

**Response 200:**
```json
{
  "id": "clresume...",
  "filename": "mark-salinas-resume-v3.pdf",
  "url": "https://[project].supabase.co/storage/v1/object/public/resume/...",
  "version": 3,
  "isActive": true,
  "uploadedAt": "2025-01-01T00:00:00.000Z"
}
```

**Response 404:** `{ "error": "No active resume" }`

---

### GET /api/resume  🔒

Returns all resume versions.

---

### POST /api/resume  🔒

Register a new resume file (upload to Supabase Storage first, then POST the URL here).

**Body:**
```json
{
  "filename": "mark-salinas-resume-v3.pdf",
  "url": "https://[project].supabase.co/storage/v1/object/public/resume/...",
  "version": 3
}
```

**Response 201:** Created ResumeFile object

---

### PATCH /api/resume/:id/activate  🔒

Sets the specified resume as active (deactivates all others atomically).

**Response 200:** Updated ResumeFile object

---

### DELETE /api/resume/:id  🔒

**Response 204:** No content

---

## Analytics

### POST /api/analytics/track

Track a page view event. Fire-and-forget — call on every page navigation.

**Body:**
```json
{
  "path": "/projects/my-project",
  "visitorId": "optional-anonymous-id"
}
```

**Response 204:** No content

---

### GET /api/analytics/summary  🔒

Returns aggregated analytics for the admin dashboard.

**Response 200:**
```json
{
  "totalViews": 1247,
  "uniqueVisitors": 0,
  "topPages": [
    { "path": "/", "count": 423 },
    { "path": "/projects", "count": 318 },
    { "path": "/contact", "count": 201 }
  ],
  "period": "all-time"
}
```

---

## Error Responses

| Status | When                          | Body shape                                          |
|--------|-------------------------------|-----------------------------------------------------|
| 401    | Missing or invalid JWT        | `{ "error": "Unauthorized" }`                       |
| 401    | Wrong credentials             | `{ "error": "Invalid credentials" }`                |
| 404    | Resource not found            | `{ "error": "..." }`                                |
| 422    | Zod validation failed         | `{ "error": "Validation failed", "issues": [...] }` |
| 429    | Rate limit exceeded           | `{ "error": "Too many requests..." }`               |
| 500    | Unexpected server error       | `{ "error": "Internal server error" }`              |

---

## Rate Limits

| Limit          | Window    | Max  | Routes                     |
|----------------|-----------|------|----------------------------|
| API global     | 15 min    | 100  | All `/api/*`               |
| Auth           | 15 min    | 10   | `POST /api/auth/login`     |
| Contact form   | 60 min    | 5    | `POST /api/contact`        |

🔒 = Requires `Authorization: Bearer <token>` header
