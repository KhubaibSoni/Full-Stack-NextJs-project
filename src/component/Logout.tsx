import { doLogout } from "@/app/actions"

const Logout = () => {
  return (
    <form action={doLogout}>
        <button type="submit">
        <span className="max-sm:hidden  text-red-500">Logout</span>
        </button>
    </form>
  )
}

export default Logout