export default function Input({ label, textarea, ...props }) {
  return (
    <p>
      <lable>{label}</lable>
      {textarea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
