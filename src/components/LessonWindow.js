import React from "react"

export default function LessonWindow() {
    return <div class="container">
            <a>Lesson Window</a>
            <form class="form-inline m-2 my-lg-0">
                <input class="form-control mr-sm-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search">
                </input>
                <button class="btn btn-outline-success my-2 my-sm-0"
                        type="submit">
                        Search
                </button>
            </form>
        </div>
}