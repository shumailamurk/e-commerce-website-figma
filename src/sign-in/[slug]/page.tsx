export default function SignInPage({ params }: { params: { slug?: string[] } }) {
    return <h1>Sign In {params.slug?.join("/")}</h1>;
  }