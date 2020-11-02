[← BACK](./README.md)

# Git CLI 커맨드 모음 
sourcetree나 github for Desktop같은 git GUI보다는 CLI (command-line interface) 커맨드로 git 관리를 하는 데에 익숙해져야 한다고 해서 자료를 찾고 써먹는 대로 일단 다 기록해두는 git CLI 커맨드 방앗간🦥 <br />
CLI를 써야 git의 모든 기능을 다 제어할 수 있다고 하던데...하면서 알게 되겠지...🤖<br />

`git clone` 
<details start>
<summary> 기존 저장소를 clone하기</summary>

![git clone HTTPS](./assets/git/git-clone-00.png "git clone HTTPS")<br /><br />
![git clone](./assets/git/git-clone-01.gif "git clone")<br /><br />
![git clone result](./assets/git/git-clone-02.png "git clone result")

</details>

`git status`
<details start> 
<summary>파일의 상태 확인하기</summary> 

![git status](./assets/git/git-status-01.gif "git status")

</details>

`git add` 
<details start>
<summary>파일을 새로 추적하기</summary>

![git add](./assets/git/git-add-01.gif "git add")

</details>

`git restore --staged`
<details start>
<summary>파일 언스테이지하기</summary>

![git restore --staged](./assets/git/git-restore-staged-01.gif "git restore --staged")

</details>

`git commit -m` 
<details start>
<summary>메시지를 인라인으로 첨부하여 변경사항 커밋하기</summary>

![git commit -m](./assets/git/git-commit-m-01.gif "git commit -m")<br /><br />
![git commit이후 status](./assets/git/git-commit-m-02.png "git commit이후 status")

</details>

`git commit --amend -m` 
<details start>
<summary>메시지를 인라인으로 첨부하여 커밋 되돌리기</summary>
</details>

`git pull` 
<details start>
<summary>리모트 저장소를 Pull하기 </summary>

![git pull](./assets/git/git-pull-01.gif "git pull")

</details>

`git push` 
<details start>
<summary>리모트 저장소에 Push하기</summary>

![git push](./assets/git/git-push-01.gif "git push")

</details>

`git branch`
<details start>
<summary>새 브랜치 생성하기</summary>

![git branch](./assets/git/git-branch-01.png "git branch")

</details>

`git log --online --decorate`
<details start>
<summary>브랜치가 어떤 커밋을 가리키는지 확인하기</summary>

![git log --online --decorate](./assets/git/git-branch-02.png "git log --online --decorate")

</details>

`git checkout`
<details start>
<summary>작업 중인 브랜치 변경하기</summary>

![git checkout](./assets/git/git-checkout-01.gif "git checkout")

</details>


## git 자료
[git documentation](https://git-scm.com/book/ko/v2)






