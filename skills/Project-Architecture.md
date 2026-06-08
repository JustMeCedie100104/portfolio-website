Full File Architecture
React + TypeScript + Node.js + Supabase Personal Portfolio
This structure follows a scalable production-grade architecture while remaining appropriate for a junior developer portfolio.

portfolio-website/

 client/                                # React Frontend
    public/
       favicon.ico
       robots.txt
       manifest.json
       sitemap.xml

    src/

       app/
          router/
             index.tsx
             ProtectedRoute.tsx
             routes.ts

          layouts/
             MainLayout.tsx
             AdminLayout.tsx
             AuthLayout.tsx

          providers/
              QueryProvider.tsx
              ThemeProvider.tsx
              AuthProvider.tsx

       pages/
          Home/
          About/
          Projects/
          Experience/
          Resume/
          Contact/
          DevLog/                         #  DEV LOG PAGE
             DevLogPage.tsx

          Admin/
             DashboardPage.tsx
             ProjectsPage.tsx
             MessagesPage.tsx
             ResumePage.tsx
             AnalyticsPage.tsx
             DevLogPage.tsx              #  ADMIN DEV LOG

          Auth/
              LoginPage.tsx

       features/

          projects/
          contact/
          resume/
          analytics/
          devlog/                        #  DEV LOG FEATURE MODULE
              api/
              hooks/
              components/
              schemas/
              types.ts

       components/
          sections/
          shared/
          ui/
          devlog/                       #  DEV LOG UI COMPONENTS
              DevLogCard.tsx
              DevLogList.tsx
              DevLogFilter.tsx
              DevLogTimeline.tsx

       hooks/
       services/
       lib/
       types/
       assets/
       styles/
       App.tsx
       main.tsx

 server/                                # Node Backend

    src/

       config/
          env.ts
          supabase.ts
          prisma.ts                 #  PRISMA CLIENT

       prisma/                       #  PRISMA CORE LAYER
          schema.prisma
          migrations/
          seed.ts

       controllers/
          project.controller.ts
          contact.controller.ts
          resume.controller.ts
          analytics.controller.ts
          auth.controller.ts
          devlog.controller.ts        #

       services/
          project.service.ts
          contact.service.ts
          resume.service.ts
          analytics.service.ts
          auth.service.ts
          devlog.service.ts           #

       repositories/
          project.repository.ts
          contact.repository.ts
          resume.repository.ts
          analytics.repository.ts
          devlog.repository.ts        #  PRISMA ACCESS LAYER

       routes/
          project.routes.ts
          contact.routes.ts
          resume.routes.ts
          analytics.routes.ts
          auth.routes.ts
          devlog.routes.ts           #

       validators/
          project.validator.ts
          contact.validator.ts
          auth.validator.ts
          devlog.validator.ts        #

       types/
          project.types.ts
          contact.types.ts
          analytics.types.ts
          devlog.types.ts            #

       middleware/
       utils/
       app.ts
       server.ts

 database/                              # (optional legacy or documentation)
    migrations/
    seeds/
    rls/

 docs/
    architecture.md
    api-documentation.md
    database-schema.md
    dev-log-guide.md                    #  DEV LOG DOCS
    deployment-guide.md                 #  DEPLOYMENT SYSTEM GUIDE

 scripts/                               #  DEPLOYMENT + AUTOMATION
    build-client.sh
    build-server.sh
    deploy-client.sh
    deploy-server.sh
    sync-env.sh
    prisma-migrate.sh

 docker-compose.yml
 README.md
 .gitignore
 package.json

What This Architecture Demonstrates
A recruiter reviewing this portfolio will immediately see that you understand:
 React Architecture
  TypeScript Best Practices
  Feature-Based Organization
  REST API Design
  Backend Layer Separation
  Authentication & Authorization
  Supabase Integration
  Database Design
  File Storage Management
  Analytics Tracking
  Deployment & DevOps Basics

