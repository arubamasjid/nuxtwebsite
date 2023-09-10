export default defineNuxtRouteMiddleware((to, from) => {
  const router = useRouter();
  console.log("middleware current route", router.currentRoute);
});
