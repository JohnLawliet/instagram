import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  // for creating custom login pages
  pages: {
      signIn: "/auth/signin"
  },

  // to tap into the callbacks received before getting session
  callbacks:{
    async session({session, token, user}) {
      // get the user's name, split the gap and join it to make like jontythakur
      session.user.username = session.user.name.split(" ").join("").toLowerCase()
      
      // token contains addn info from google. token.sub is google's user id that is returned
      session.user.uid = token.sub
      return session
    }
  }
})