# nextfire notes

## Pre-Prep

In VSCode, install the extensions:

- `Prettier`
- `Firebase Explorer`
- `GitHub Pull Requests & Issues`
- `git-autoconfig`

The next step was to setup VSCode to be able to use multiple GitHub accounts.

Edit the `settings.json` file your user accounts:

```
"git-autoconfig.configList": [
    {"user.email": "hadella@flatearthinc.com", "user.name": "hadella"},
    {"user.email": "pitchnogle@gmail.com", "user.name": "Pitchnogle"}
]
```

> Not sure if this needs to be done each time you change accounts or not. If so, enter the correct
> username and email for the user account.
>
> ```
> git config --global user.email "pitchnogle@gmail.com"
> git config --global user.name "Pitchnogle"
> ```

In the lower part of VSCode, there is a icon above the settings icon which allows you to choose
which user account to use.

## Prep

This contains notes for an online Next/Firebase/React course.

https://fireship.io/courses/react-next-firebase/

```json
{
  // ...

  "dependencies": {
    "firebase": "^8.2.1",
    "lodash.debounce": "^4.0.8",
    "lodash.kebabcase": "^4.1.1",
    "next": "10.0.4",
    "react": "17.0.1",
    "react-dom": "17.0.1",
    "react-firebase-hooks": "^2.2.0",
    "react-hook-form": "^6.14.2",
    "react-hot-toast": "^1.0.2",
    "react-markdown": "^5.0.3"
  }
}
```

Before continuing, I attempted to install all the dependencies using the specific versions.

```
npm install firebase@8.2.1
npm install lodash.debounce@4.0.8
npm install lodash.kebabcase@4.1.1
npm install next@10.0.4
npm install react@17.0.1
npm install react-dom@17.0.1
npm install react-firebase-hooks@2.2.0
npm install react-hook-form@6.14.2
npm install react-hot-toast@1.0.2
npm install react-markdown@5.0.3
```

> The only one I had trouble with was the `react-firebase-hooks` which produced an error

Lessons 1-5 are free tier. The remaining content requires a pro membership.

## Lesson 3 - Firebase Basics

I started with a new folder where we will add some firebase test content.

```
mkdir firebasics
cd firebasics
```

> Check the version of node.js installed. Versions 8+ should be fine
>
> ```
> node -v
> v16.15.1
> ```

Create a new firebase project. I called mine 'firebasics'.

In VSCode, create a new folder `public` with an `index.html` inside it. Type `!` and the tab key
to generate a basic HTML page. Paste the authentication info from firebase into the head.

```html
<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBhaCvJQdHJrTYZXMxUOupUUqHk7Dc_M2A",
    authDomain: "firebasics-95048.firebaseapp.com",
    projectId: "firebasics-95048",
    storageBucket: "firebasics-95048.appspot.com",
    messagingSenderId: "873433441495",
    appId: "1:873433441495:web:af3ed03e9d3aeaf390fc92",
    measurementId: "G-WHH5VGZ1WW",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
```

The url given in the above todo doesn't provide the necessary import statements we need for
authentication and cloud firestore. [This](https://firebase.google.com/docs/web/learn-more#available-libraries) link does.

Add the lines:

```js
import {} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import {} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js";
```

## Lesson 6 - Next.js Setup

Before starting up, I created a github repo for this course, and then cloned it to the local PC.

```
git clone https://github.com/Pitchnogle/nextfire.git
```

Then I created the project from the parent folder (one level down) so it's created into that repo.

> The `create-next-app` script will create a README.md so delete the current one.

```
npx create-next-app nextfire
```

To test things worked out, start up the server.

```
cd nextfire
npm run dev
```

Then open a new tab at `localhost:3000` to see the default content.

Replace the contents of `styles/globals.css` with [this](https://raw.githubusercontent.com/fireship-io/next-firebase-course/main/styles/globals.css).

Open `pages\index.js` and remove most of the code

```js
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return <div></div>;
}
```

At the project root directory, create two new folders: `lib` and `components`. Then create the empty
files: `lib/hooks.js`, `lib/firebase.js`, and `components/Navbar.js`.

## Lesson 7 - Typescript

This was an _optional_ step. Since this is my first exposure to this technology, not going to use
it for this project.

## Lesson 8 - Firebase Setup

Go to [firebase](firebase.google.com) and click the 'Get Started' button. In the next page, click
the 'Create a Project' button. For this project, I also named it `nextfire`. After this completes,
create a web application in the getting started section. I also named it `nextfire`.

> In the video, it seems like a project was already created in advance but that is not shown. It
> likely follows the same approach in the lesson 3's Firebase setup.

The first step is to navigate to Build->Authentication and to enable Google authentication.

> This auto-populated the project name. I had to add an email support.

The next step is to navifate to Build->Firestore Database to create a database. Following the video
it advises to start in 'test mode'.

In the 'Rules' tab, I modified the rules to match the video. _This is fully open..._

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write;
    }
  }
}
```

Install some additional tools.

```
npm i firebase react-firebase-hooks
```

```
sudo npm install -g firebase-tools
```

> Skipped the _optional_ step of `firebase init` to setup local firebase for development.

## Lesson 9 - Routing

Create `pages/enter.js` with the following content

```js
export default function EnterPage({}) {
  return (
    <main>
      <h1>Sign Up</h1>
    </main>
  );
}
```

Start the server `npm run dev` and navigate to `localhost:3000/enter` to see page we just made.

> Open the web debug console (CTRL-ENTER-J), and install the react developer tools plugin.

We'll now create several more folders and pages. The ones in [] braces define dynamic routes.

`[username]/index.js`:

```js
export default function UserProfilePage({}) {
  return (
    <main>
      <h1>User Profile Page</h1>
    </main>
  );
}
```

`[username]/[slug].js`:

```js
export default function PostPage({}) {
  return (
    <main>
      <h2>A Post</h2>
    </main>
  );
}
```

`admin/index.js`:

```js
export default function AdminPostsPage({}) {
  return (
    <main>
      <h1>Admin Posts</h1>
    </main>
  );
}
```

`admin/[slug].js`:

```js
export default function AdminPostEdit({}) {
  return (
    <main>
      <h1>Edit Post</h1>
    </main>
  );
}
```

## Lesson 10 - Loader

Create a new file `components/loader.js` with the contents:

```js
export default function Loader({ show }) {
  return show ? <div className="loader"></div> : null;
}
```

> The `globals.css` has an entry for `.loader` in it

For now, edit `pages/index.js` to add in the spinning loader animation.

```js
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <Loader show />
    </div>
  );
}
```

## Lesson 11 - Navbar

In this lesson, we will add content to the `components/Navbar.js` file:

```js
import Link from "next/link";

// Top navbar
export default function Navbar() {
  const user = null;
  const username = null;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className="btn-logo">FEED</button>
          </Link>
        </li>

        {/* user is signed-in and has username */}
        {username && (
          <>
            <li className="push-left">
              <Link href="/admin">
                <button className="btn-blue">Write Posts</button>
              </Link>
            </li>
            <li>
              <Link href={`/${username}`}>
                <img src={user?.photoURL} />
              </Link>
            </li>
          </>
        )}

        {/* user is not signed OR has not created username */}
        {!username && (
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log in</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
```

In order to see the navbar, we could individually edit each index.js to use it. A more efficient
approach is to edit the `_app.js` which is parent.

```js
import "../styles/globals.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
```

## Lesson 12 - Toast

The toast api makes it easy to add notification to the app with little work.

```
npm i react-hot-toast
```

Edit `_app.js` to add the toaster

```js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
```

To test things out add a button to the main `index.html` and then click the button and see what
happens.

```js
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Home() {
  return (
    <div>
      {/* <Loader show /> */}
      <button onClick={() => toast.success("hello toast")}>Toast me</button>
    </div>
  );
}
```

## Lesson 14 - Google SignIn

Edit `lib/firebase.js` and add the following to the end of the file.

```
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
```

In this lesson, we'll alter the `enter.js` file to add in Google authentication.

```js
import { auth, googleAuthProvider } from "../lib/firebase";

export default function Enter(props) {
  const user = null;
  const username = null;

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} /> Sign in with Google
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  return null;
}
```

If you go the enter page, once logged in, in the dev tools under Application there should be a
entry which has info about the authenticated user.

## Lesson 15 - Auth Context

The idea in this lesson is that we want to have Google authentication on one end, but we also want
to have a separate username which is not part of Google authentication.

Create a new file `lib/context.js`.

```js
import { createContext } from "react";

export const UserContext = createContext({ user: null, username: null });
```

Since the context is global we'll add it to `_app.js`.

```js
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../lib/context";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserContext.Provider value={{ user: {}, username: "justin" }}>
        <Navbar />
        <Component {...pageProps} />
        <Toaster />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
```

> In this case, we are "hard-coding" the user name. We'll use the database later on.

To see the effects, we'll edit `components/Navbar.js`. We'll make some changes to the top of the
file.

```js
import { useContext } from 'react';
import { UserContext } from '../lib/context';

// Top navbar
export default function Navbar() {
//   const user = null;
//   const username = null;
	const { user, username } = useContext(UserContext);
```

We'll also make some edits to `enter.js`.

```js
import { useContext } from 'react';
import { UserContext } from '../lib/context';

export default function Enter(props) {
//   const user = null;
//   const username = null;
	const { user, username } = useContext(UserContext);
```

## Lesson 16 - Auth Hook

Update `lib/hooks.js`.

```js
import { auth, firestore } from "../lib/firebase";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    // turn off realtime subscription
    let unsubscribe;

    if (user) {
      const ref = firestore.collection("users").doc(user.uid);
      unsubscribe = ref.onSnapshot((doc) => {
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, username };
}
```

Modify `_app.js` to replace the hard-coded user.

```js
import { useUserData} from '../lib/hooks';

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <>
      <UserContext.Provider value={userData}>
```

## Lesson 17 - Custom Usernames

For the username validation, we don't want to trigger this continually. Instead, we will wait for
500 ms from when the user stops typing. The library we use for this "debounce" is `losash.debounce`.

```
npm install lodash.debounce
```

The `enter.js` file implemented the `UsernameForm()` function. See the repo.

## Lesson 28 - Post Editing Form

Ran into an issue with `react-hook-form` version 7. The tutorial example was using version 6 and
was causing issue for me.

```js
function PostForm({ defaultValues, postRef, preview }) {
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues,
    mode: "onChange",
  });

  const updatePost = async ({ content, published }) => {
    await postRef.update({
      content,
      published,
      updatedAt: serverTimestamp(),
    });

    reset({ content, published });

    toast.success("Post updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit(updatePost)}>
      {preview && (
        <div className="card">
          <ReactMarkdown>{watch("content")}</ReactMarkdown>
        </div>
      )}

      <div className={preview ? styles.hidden : styles.controls}>
        <textarea
          name="content"
          {...register("content", { required: true })}
        ></textarea>

        <fieldset>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="published"
            {...register("published", { required: true })}
          />
          <label>Published</label>
        </fieldset>

        <button type="submit" className="btn-green">
          Save Changes
        </button>
      </div>
    </form>
  );
}
```

## Lesson 29 - Form Validation

This one was also a little tricky since due to version 7. To make it work, I had to review some docs
on react-hook-form. The `formState` and `errors` are used slightly different.

```js
function PostForm({ defaultValues, postRef, preview }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
    formState,
  } = useForm({
    defaultValues,
    mode: "onChange",
  });

  const { isValid, isDirty } = formState;

  const updatePost = async ({ content, published }) => {
    await postRef.update({
      content,
      published,
      updatedAt: serverTimestamp(),
    });

    reset({ content, published });

    toast.success("Post updated successfully!");
  };

  return (
    <form onSubmit={handleSubmit(updatePost)}>
      {preview && (
        <div className="card">
          <ReactMarkdown>{watch("content")}</ReactMarkdown>
        </div>
      )}

      <div className={preview ? styles.hidden : styles.controls}>
        <textarea
          name="content"
          {...register("content", {
            required: { value: true, message: "content is required" },
            maxLength: { value: 20000, message: "content is too long" },
            minLength: { value: 10, message: "content is too short" },
          })}
        ></textarea>

        {errors.content && (
          <p className="text-danger">{errors.content.message}</p>
        )}

        <fieldset>
          <input
            className={styles.checkbox}
            type="checkbox"
            name="published"
            {...register("published", { required: true })}
          />
          <label>Published</label>
        </fieldset>

        <button
          type="submit"
          className="btn-green"
          disabled={!isDirty || !isValid}
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
```
