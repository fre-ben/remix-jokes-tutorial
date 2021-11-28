import { Outlet } from "remix";

export default function JokesRoute() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
