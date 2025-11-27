export default function Footer() {
  return (
    <footer className="bg-white text-center py-2 mt-auto">
      <p className="text-sm text-gray-600 font-poppins font-semibold">
        © {new Date().getFullYear()} Glamstar. All rights reserved.
      </p>
    </footer>
  );
}
