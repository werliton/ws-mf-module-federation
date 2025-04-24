declare module "provider" {
    type User = {
        name: string
        email: string
    }
    const Provider: React.ComponentType<{ user:User }>;
    export default Provider
}