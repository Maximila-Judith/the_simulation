import SignInForm from "@/components/ui/signInForm";


export default function signIn() {
    return (
        <main className="flex items-center justify-center w-full md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[800px] p-4 md:-mt-32">
                <SignInForm />
            </div>
        </main>
    );
}