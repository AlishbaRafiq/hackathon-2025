import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";


export default function AccountPage() {
  return (
    <main className="container mx-auto px-6 py-12">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-semibold">My Account</h1>
        <p className="text-gray-500">Home &gt; My Account</p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <LoginForm />
        <RegisterForm />
      </div>
    </main>
  );
}
