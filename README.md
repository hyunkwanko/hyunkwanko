<h3>Environment Setting</h3>

* Windows 10
* Chrome
* Anaconda 32-Bit Graphical
* PyCharm
* Python 3.7.6

<h3>KIWOOM Open API</h3>

1. 계좌 개설 
2. 키움증권 회원 가입
3. 상시 모의투자 참가신청
4. OpenAPI 사용신청(공인인증서 필요)
5. Open API 모듈 다운로드
6. KOA Studio(증권사에서 가져올 수 있는 정보를 확인하는 프로그램) 다운로드
    + Visual Studio가 미리 다운로드 되어있어야 KOA Studio 실행 가능
    + 키움증권 홈페이지에서 개발 가이드 라인 제공

<h3>KOA Studio Connection</h3>

1. 프로그램 실행
2. '파일' 클릭
3. 'Open API 접속'
4. 고객 ID, 비밀번호 입력
5. 모의투자 접속 체크 후 접속
6. 오른쪽 하단에 프로그램(아이콘) 연결 확인
7. 아이콘을 우클릭하여 '계좌비밀번호 저장' 버튼 클릭 (계좌비밀번호 입력창)
8. 등록 버튼 클릭 후 AUTO 체크
    + 다음부터 접속할 때는 따로 비밀번호를 입력하지 않아도 된다.

* PyCharm에서 Open API를 처음 실행할 경우

1. 사용자 계정 컨트롤 팝업창
2. '자세한 내용 표시' 클릭
3. 알림 설정을 '알리지 않음'으로 설정(봇을 자동으로 돌릴 때 팝업이 생성되지 않도록 하기 위함)

<h3>Database Download</h3>

1. MySQL 홈페이지 접속
2. 상단의 DOWNLOADS 클릭
3. 'MySQL Community(GPL) Downloads' 클릭
4. 'MySQL Installer for Windows' 클릭
5. 'MySQL Installer 8.0.20' 설치
6. Windows (x86, 32-bit), MSI Installer (용량 ↑)
7. Root Password 설정 후 'Add User'를 클릭하여 User를 생성 (예: 'bot')
8. 'Connect To Server' 창에서 생성한 User로 접속 테스트

<h3>DataGrip</h3>

+ DataGrip, MySQL Connection

1. '+' 아이콘 클릭 
2. 'Data Source' 탭
3. 'MySQL' 클릭
4. MySQL User, Password 입력
    + Test Connection에서 Set time zone 에러가 발생한다면, 클릭 후 Apply만 해주면 무사히 접속이 완료
5. 라이브러리 config.py에서 MySQL의 User, Password, 모의 계좌를 입력
6. 초기 Database 생성
    + 초기 database 생성 쿼리문<br>
        create database daily_craw;<br>
        create database min_craw;<br>
        create database daily_buy_list;
        
    + 시뮬레이터 리포트 database 생성<br>
        create database simul_scrap;
        
<h3>MySQL 로그 자동 삭제 매뉴얼</h3>

1. Datagrip에서 콘솔창에 show binary logs; 를 입력하면 현재 쌓여있는 로그 파일을 볼 수 있다. 
    + 이 로그파일이 자꾸 쌓여서 PC 용량을 잡아먹지 않게 주기적으로 삭제 해주는 옵션을 설정
2. Window 시작 버튼 옆에 검색 창에 "C:\ProgramData\MySQL\MySQL Server 8.0" 를 입력한다. 
    + ProgramData 폴더가 숨김 폴더라서 파일 탐색기에서는 안보일 수 있다.
3. 'my' 라는 파일을 우클릭 -> 편집 클릭
4. ctrl + f 를 눌러서 'mysqld'를 검색 (검색 시 방향 옵션을 위, 아래로 설정 가능)
5. **expire_logs_days = 3** 입력(3일 간만 로그를 보관하였다가 삭제 하는 명령)
6. ctrl + s 를 눌러서 저장
7. 다시 Window 시작 버튼 옆의 검색창에 "서비스" 를 검색
8. MySQL80 이라는 서비스를 찾아서 다시 시작 (즉, MySQL을 재부팅 해야한다)
9. 다시 Datagrip으로 돌아와서 1번에서 진행했던 show binary logs; 를 실행하여 로그들의 개수 확인 

<h3>MySQL 용량 확인</h3>

* 'C:\ProgramData' -> MySQL 폴더를 우측 클릭 후 속성을 클릭하면 총 용량 확인

<hr>
Collector -> 데이터 수집
매일 오후 3시 10분에 콜렉터를 돌리면 5, 6시 쯤에 완료