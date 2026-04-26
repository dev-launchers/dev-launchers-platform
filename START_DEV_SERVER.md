# 🚀 Development Server Setup Guide

## 📁 **Correct Project Structure**
```
c:\project1\Dev_launchers\dev-launchers-platform\
├── apps\
│   └── dev-recruiters\          ← Your target app
├── packages\
└── FIGMA_DESIGN_ALIGNMENT_DOCUMENTATION.md
```

## 🔧 **How to Start the Dev Server**

### **Option 1: Navigate to Correct Directory**
```bash
# ✅ CORRECT PATH
cd "c:\project1\Dev_launchers\dev-launchers-platform\apps\dev-recruiters"
npm run dev

# ❌ WRONG PATH (what you tried)
cd apps/dev-recruiters  # This doesn't exist from c:\project1
```

### **Option 2: Use Yarn Workspace (Recommended)**
```bash
cd "c:\project1\Dev_launchers\dev-launchers-platform"
yarn workspace @devlaunchers/dev-recruiters dev
```

### **Option 3: Build and Start (If Dependencies Issue)**
```bash
cd "c:\project1\Dev_launchers\dev-launchers-platform\apps\dev-recruiters"
npm run build
npm run start
```

## 🌐 **Access Your Pages**

Once the server is running, visit:
- **Main Join Page:** http://localhost:3000/join
- **Role Details:** http://localhost:3000/join/role?id={id}
- **Filter Page:** http://localhost:3000/join/filter
- **Talent Community:** http://localhost:3000/join/second

## 📱 **Alternative: Static Preview**

If dev server doesn't work, you can:
1. **Build the project:** `npm run build`
2. **Serve static files:** Use any static server (like `npx serve`)

## 🔍 **Troubleshooting**

### **Issue: "Cannot find path"**
**Solution:** Use the full path:
```bash
cd "c:\project1\Dev_launchers\dev-launchers-platform\apps\dev-recruiters"
```

### **Issue: Dependencies not installed**
**Solution:** Install from project root:
```bash
cd "c:\project1\Dev_launchers\dev-launchers-platform"
yarn install
```

### **Issue: Port already in use**
**Solution:** Kill the process or use different port:
```bash
npm run dev -- -p 3001
```

## 📋 **Quick Start Commands**

```bash
# Navigate to project
cd "c:\project1\Dev_launchers\dev-launchers-platform"

# Install dependencies (if needed)
yarn install

# Start dev server
yarn workspace @devlaunchers/dev-recruiters dev

# Or navigate directly:
cd "c:\project1\Dev_launchers\dev-launchers-platform\apps\dev-recruiters"
npm run dev
```

## 🎯 **What to Show Stakeholders**

When the server is running, demonstrate:
1. **Typography consistency** across all pages
2. **Color standardization** with theme tokens
3. **Spacing uniformity** in layouts
4. **Responsive behavior** on different screen sizes

Use the **BEFORE_AFTER_FIGMA_ALIGNMENT.md** document to explain the technical changes!
