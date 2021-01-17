+import { useField } from 'react-final-form-hooks';
+
+const useFieldsForm = (init, form) => {
+  const _useFields = {};
+  Object.keys(init).map(param => {
+    _useFields[param] = useField(param === 0 ? '0' : param, form);
+  });
+  return _useFields;
+};
+
+export default useFieldsForm;