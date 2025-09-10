import { createUser } from "@/slices/authSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "@/slices/store/store";
import { useSelector } from "react-redux";

interface CreateAccountProps {
    email: string;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    middlename: string;
    role: string;
    address: string;
    phone_number: number;
};

const CreateAccount = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, error } = useSelector((state: RootState) => state.auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CreateAccountProps>();

    const onSubmit = async (data: CreateAccountProps) => {
        console.log("Form Submitted:", data);
        await dispatch(createUser({ userData: data, token: localStorage.getItem("token") }));
    };
    return <div>
        <h2 className="text-xl font-semibold">➕ Create Account Section</h2>
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg"
        >
            <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="border p-2 rounded"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}

            <input
                type="text"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
                className="border p-2 rounded"
            />
            {errors.username && <p className="text-red-500">{errors.username.message}</p>}

            <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className="border p-2 rounded"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}

            <input
                type="text"
                placeholder="First Name"
                {...register("firstname", { required: "First name is required" })}
                className="border p-2 rounded"
            />
            {errors.firstname && <p className="text-red-500">{errors.firstname.message}</p>}

            <input
                type="text"
                placeholder="Middle Name"
                {...register("middlename")}
                className="border p-2 rounded"
            />

            <input
                type="text"
                placeholder="Last Name"
                {...register("lastname", { required: "Last name is required" })}
                className="border p-2 rounded"
            />
            {errors.lastname && <p className="text-red-500">{errors.lastname.message}</p>}

            <input type="radio" name="role" id="admin" value="admin" {...register("role", { required: "Role is required" })} />
            <label htmlFor="admin">Admin</label>

            <input type="radio" name="role" id="user" value="user" defaultChecked {...register("role", { required: "Role is required" })} />
            <label htmlFor="user">User</label>

            <input
                type="text"
                placeholder="Address"
                {...register("address")}
                className="border p-2 rounded"
            />

            <input
                type="tel"
                placeholder="Phone Number"
                {...register("phone_number")}
                className="border p-2 rounded"
            />

            <button
                type="submit"
                className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
                {loading ? "Submitting..." : "Submit"}
            </button>
        </form>
    </div>;
};
export default CreateAccount;