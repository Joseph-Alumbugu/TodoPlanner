namespace Project12

open WebSharper
open WebSharper.JavaScript
open WebSharper.UI
open WebSharper.UI.Html
open WebSharper.UI.Client
open WebSharper.Forms


[<JavaScript>]
module PersonPets =

    type Category =
        | Hobbies | Career | Lifestyle

        override this.ToString() =
            match this with
            | Hobbies -> "Hobbies"
            | Career -> "Career"
            | Lifestyle -> "Lifestyle"

    type Todo = { Category: Category; name: string }
    type Person = { firstName: string; lastName: string; pets: seq<Todo> }

    let Todoitem (init: Todo) =
        Form.Return (fun s n -> { Category = s; name = n })
        <*> Form.Yield init.Category
        <*> (Form.Yield init.name
            |> Validation.IsNotEmpty "Please Fill up your schedule.")

    let PersonPiglet (init: Person) =
        Form.Return (fun first last pets ->
            { firstName = first; lastName = last; pets = pets })
        <*> (Form.Yield init.firstName
            |> Validation.IsNotEmpty "Please enter your first name.")
        <*> (Form.Yield init.lastName
            |> Validation.IsNotEmpty "Please enter your last name.")
        <*> Form.Many init.pets { Category = Hobbies; name = "" } Todoitem
        |> Form.WithSubmit

    let RenderPet category name =
        Doc.Concat [
            div [attr.``class`` "field"] [
                label [attr.``class`` "label"] [
                    Doc.InputType.Radio [] Hobbies category; text (string Hobbies)
                ]
            ]
            div [attr.``class`` "field"] [
                label [attr.``class`` "label"] [
                    Doc.InputType.Radio [] Career category; text (string Career)
                ]
            ]
            div [attr.``class`` "field"] [
                label [attr.``class`` "label"] [
                    Doc.InputType.Radio [] Lifestyle category; text (string Lifestyle)
                ]
            ]
            div [attr.``class`` "field"] [
                Doc.InputType.Text [attr.``class`` "input"] name
            ]
        ]

    let ShowErrorsFor v =
        v
        |> View.Map (function
            | Success _ -> Doc.Empty
            | Failure errors ->
                Doc.Concat [
                    for error in errors do
                        yield b [attr.style "color:red"] [text error.Text]
                ]
        )
        |> Doc.EmbedView

    let RenderPerson (firstName: Var<string>)
                     (lastName: Var<string>)
                     (pets: Form.Many.CollectionWithDefault<Todo,_,_>)
                     (submit: Submitter<Result<_>>) =
        section [attr.``class`` "section"] [
            h1 [attr.``class`` "subtitle"] [text "TODO LIST"]
            div [attr.``class`` "field"] [
                label [attr.``class`` "label"] [
                    text "First name: "
                    Doc.InputType.Text  [attr.``class`` "input"] firstName
                ]
                ShowErrorsFor (submit.View.Through firstName)
            ]
            div [attr.``class`` "field"] [
                label [attr.``class`` "label"] [
                    text "Last name: "
                    Doc.InputType.Text [attr.``class`` "input"] lastName
                ]
                ShowErrorsFor (submit.View.Through lastName)
            ]
            h2 [attr.``class`` "subtitle"] [text "Your Daily Schedule"]
            div [] [
                pets.Render (fun ops category name ->
                    div [attr.``class`` "field is-horizontal"] [
                        div [attr.``class`` "field-body"] [
                            RenderPet category name
                            Doc.ButtonValidate "Move up" [attr.``class`` "button"] ops.MoveUp
                            Doc.ButtonValidate "Move down" [attr.``class`` "button"] ops.MoveDown
                            Doc.Button "Delete" [attr.``class`` "button"] ops.Delete
                            ShowErrorsFor (submit.View.Through name)
                        ]
                    ])
                Doc.Button "Add Item" [attr.``class`` "button"] pets.Add
            ]
            div [] [
                Doc.Button "Submit" [attr.``class`` "button"] submit.Trigger
            ]
        ]

    [<SPAEntryPoint>]
    let FinalForm() =
        PersonPiglet {
            firstName = ""
            lastName = ""
            pets = [||] }
        |> Form.Run (fun p ->
            let message =
                "Welcome to you " + p.firstName + " " + p.lastName +
                (p.pets
                    |> Seq.map (fun n ->
                        ", your " + string n.Category + " " + n.name)
                    |> String.concat "") +
                "!"
            JS.Alert message)
        |> Form.Render RenderPerson
        |> Doc.RunById "main"