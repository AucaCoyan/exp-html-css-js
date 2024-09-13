export def --env list-packages [] {
    if (("./package.json" | path exists) == false) {
        print "package.json not found!"
    }
    let workspaces = open "package.json" | get "workspaces"
    mut version_table = {}
    for $item in $workspaces {
        cd $"($item)/"
        let version = open package.json | get version
        # print $"($item) version ($version)"
        $version_table | insert $item $version
        cd ../..
    }
    print $version_table
}

def "write version" [file: path, version: string ] {
    open $file | update version $version | save $file --force
}

export def "bump bugfix" [] {
    let new_version = input "To which version do you want to change? (d.d.d) "
    print $"bumping ($new_version)"
    write version packages/app-backend/package.json $new_version
}
