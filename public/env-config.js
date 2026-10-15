// Runtime configuration. Overwritten by the container entrypoint at startup,
// so one image can serve every environment/customer without a rebuild.
// Keys mirror the VITE_* variables without the prefix. Empty = use build-time value.
window.__ENV__ = {};
