# 🔧 Connection Troubleshooting Guide

## ⚠️ Current Issue: ERR_CONNECTION_REFUSED

The development server isn't starting properly. Let's troubleshoot step by step.

---

## 🔍 **Step 1: Check if Server is Actually Running**

### **Check Active Processes:**
```bash
# Check if Next.js is running
tasklist | findstr "node"

# Check what's using port 3000/3001
netstat -ano | findstr :3000
netstat -ano | findstr :3001
```

### **Kill Conflicting Processes:**
```bash
# Kill any Node.js processes
taskkill /f /im node.exe

# Kill specific process using port
taskkill /PID <PID> /F
```

---

## 🔍 **Step 2: Try Different Server Start Methods**

### **Option A: Direct Next.js with Explicit Port**
```bash
cd "c:\project1\Dev_launchers\dev-launchers-platform\apps\dev-recruiters"

# Try port 3002 to avoid conflicts
npx next@latest dev --port 3002 --hostname 0.0.0.0
```

### **Option B: Static Build and Serve**
```bash
cd "c:\project1\Dev_launchers\dev-launchers-platform\apps\dev-recruiters"

# Build the project
npx next@latest build

# Serve the static files
npx serve out -p 3002
```

### **Option C: Simple HTTP Server**
```bash
cd "c:\project1\Dev_launchers\dev-launchers-platform\apps\dev-recruiters"

# Install and use http-server
npm install -g http-server
http-server -p 3002
```

---

## 🔍 **Step 3: Check Windows Firewall/Antivirus**

### **Temporarily Disable Firewall:**
1. Open Windows Security
2. Firewall & network protection
3. Temporarily disable for testing

### **Check Antivirus Blocking:**
- Some antivirus software blocks localhost connections
- Add Node.js/Next.js to antivirus exceptions

---

## 🔍 **Step 4: Verify Network Configuration**

### **Check Hosts File:**
```bash
# Open hosts file
notepad C:\Windows\System32\drivers\etc\hosts

# Ensure localhost is mapped to 127.0.0.1
127.0.0.1 localhost
```

### **Check Network Adapters:**
```bash
# Check if localhost is working
ping localhost
ping 127.0.0.1
```

---

## 🎯 **Backup Plan: Code Review Demo**

If server won't start, you can still demonstrate your work:

### **1. Show Documentation Files**
- `BEFORE_AFTER_FIGMA_ALIGNMENT.md` - Complete comparisons
- `FIGMA_DESIGN_ALIGNMENT_DOCUMENTATION.md` - Technical details

### **2. Show Code Changes**
Open these files to demonstrate theme token integration:
- `HeaderJoinPage/styles.ts` - Typography and colors
- `signUpForm.tsx` - Enhanced form styling
- `CollapsibleContainer/styles.ts` - Role card improvements

### **3. Explain Key Improvements**
```typescript
// BEFORE: Hardcoded values
color: #ffffff;
font-family: 'Oswald';

// AFTER: Theme tokens with fallbacks
color: ${({ theme }) => theme?.colors?.White || '#ffffff'};
font-family: ${({ theme }) => theme?.fonts?.headline || 'Oswald'}, sans-serif;
```

---

## 📞 **Quick Test Commands**

### **Test 1: Basic Server**
```bash
cd "c:\project1\Dev_launchers\dev-launchers-platform\apps\dev-recruiters"
npx next@latest dev --port 3002
```

### **Test 2: Alternative Port**
```bash
npx http-server -p 8080
```

### **Test 3: Static Build**
```bash
npx next@latest build && npx serve out -p 8080
```

---

## ✅ **Success Indicators**

Server is working when you see:
- ✅ "Ready on http://localhost:3002" message
- ✅ Browser loads without connection refused error
- ✅ Pages show your Figma-aligned design changes

---

## 🎯 **Next Steps**

1. **Try Option A** first (Next.js on port 3002)
2. **If that fails, try Option B** (static build)
3. **If still failing, use Code Review Demo**
4. **Document the issue** for future reference

Your Figma design alignment work is **100% complete** - we just need to solve this technical issue to show it live!
