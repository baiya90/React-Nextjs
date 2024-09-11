export default function LayoutDashboard({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main>
            {/* 在路由中也可以设置layout，接受page文件 的children */}
            <h2> LayoutDashboard </h2>
            {children}
        </main>
    );
  }
  