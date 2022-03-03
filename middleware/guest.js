// We use custom middleware for guest because of this problem
// https://github.com/nuxt-community/auth-module/issues/798#issuecomment-1058065261
export default async function ({ app, redirect }) {
  const user = await app.$cookies.get('auth._token.laravelSanctum')
  if (user) {
    return redirect('/')
  }
}
